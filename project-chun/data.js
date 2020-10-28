
const DATA = {
    sites: [
        {
            id: "lee_town",
            name: "李家屯",
            ports: [
                { target: "happy_street" },
            ],
            events: [],
        },
        {
            id: "happy_street",
            name: "幸福大道",
            ports: [
                { target: "padfoot_port" },
                { target: "lee_town" },
            ],
            events: [
                { id: "rob", weight: 20 },
                { id: "pick_purse", weight: 5 },
                { id: "nothing", weight: 75 },
            ],
        },
        {
            id: "padfoot_port",
            name: "大脚丫子港",
            ports: [
                { target: "happy_street" },
            ],
            events: [
                { id: "pick_purse", weight: 25 },
                { id: "hire", weight: 50 },
                { id: "nothing", weight: 25 },
            ],
        },
        {
            id: "work_place",
            name: "工地",
            ports: [
                { target: "lee_town" },
            ],
            events: [],
        },
    ],
    events: [
        {
            id: "nothing",
            action: () => { },
        },
        {
            id: "pick_purse",
            text: "你发现地上有一个钱包",
            options: [
                {
                    text: "捡起收好",
                    action: game => {
                        if (chance(0.5)) {
                            game.mutate('honor', -randInt(10, 20), "被钱包主人发现");
                            if (chance(0.6)) {
                                game.mutate('hp', -randInt(10, 20), '而且还被打了一顿');
                            }
                        } else {
                            game.mutate('money', randInt(10, 100), '收为己有');
                        }
                        game.showState();
                    }
                },
                {
                    text: "送到派出所",
                    action: game => {
                        game.mutate('honor', randInt(10, 20), '"得到了👮蜀黍的赞赏"');
                        game.showState();
                    }
                },
                {
                    text: "无视",
                    action: game => {
                        game.addText("于是你继续你的逃亡生涯", 'bad');
                        game.showState();
                    }
                },
            ],
        },
        {
            id: "rob",
            text: "你遭遇了抢劫",
            options: [
                {
                    text: "反抗",
                    action: game => {
                        if (chance(0.5)) {
                            game.mutate('hp', -randInt(5, 10), '你打了了劫匪，一分钱没丢，但是受伤了');
                        } else {
                            game.mutate('hp', -randInt(10, 30), '你不仅没保护住钱');
                            game.mutate('money', -randInt(15, 20), '而且受伤了');
                        }
                        game.showState();
                    }
                },
                {
                    text: "交钱",
                    action: game => {
                        game.mutate('money', -randInt(15, 20), '破财消灾');
                        game.showState();
                    }
                },
            ],
        },
        {
            id: "hire",
            action: (game) => {
                const payment = randInt(20, 50);
                game.addText("有人打算雇佣你干活，酬劳是" + payment, 'event');
                game.setOptions([
                    {
                        text: "接受",
                        action: game => {
                            game.goToSite('work_place', true);
                            game.mutate('money', payment, '辛勤劳作后，最终挣到了钱');
                            game.showState();
                        }
                    },
                    {
                        text: "拒绝",
                        action: game => {
                            game.addText("于是你继续等待");
                            game.showState();
                        }
                    },
                ]);
            },
        },
    ],
    entry: {
        site: "lee_town",
        story: "你叫李狗蛋，因为出言不逊遭仇家，现在沦落天涯"
    },
    exit: {
        story: "最终李狗蛋还是没能逃过仇家的追杀"
    },
};
