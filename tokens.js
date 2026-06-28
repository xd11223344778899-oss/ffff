// status can be "online", "idle", "dnd", "invisible" or "offline"
export default [
    {
        channelId: "1508329704355139604",
        serverId: "1372543856515747943",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5,
            maxRetries: 5,
        },
        presence: {
            status: "offline",
        },
        selfMute: false,
    },
    {
        channelId: "1508329282102104134",
        serverId: "1372543856515747943",
        token: process.env.token2,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5,
            maxRetries: 5,
        },
        presence: {
            status: "offline",
        },
        selfMute: false,
    },
    {
        channelId: "1508328514082836551",
        serverId: "1372543856515747943",
        token: process.env.token3,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 5,
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
    {
        channelId: "1508329031383126016",
        serverId: "1372543856515747943",
        token: process.env.token4,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5,
            maxRetries: 5,
        },
        presence: {
            status: "dnd",
        },
        selfMute: false,
    },
    {
        channelId: "1508329031383126016",
        serverId: "1372543856515747943",
        token: process.env.token5,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5,
            maxRetries: 5,
        },
        presence: {
            status: "dnd",
        },
        selfMute: false,
    },
    {
        channelId: "1508328713341894686",
        serverId: "1372543856515747943",
        token: process.env.token6,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5,
            maxRetries: 5,
        },
        presence: {
            status: "dnd",
        },
        selfMute: true,
    },
    {
        channelId: "1508328713341894686",
        serverId: "1372543856515747943",
        token: process.env.token7,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5,
            maxRetries: 5,
        },
        presence: {
            status: "dnd",
        },
        selfMute: false,
    },
    {
        channelId: "1508321542965301250",
        serverId: "1372543856515747943",
        token: process.env.token8,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5,
            maxRetries: 5,
        },
        presence: {
            status: "dnd",
        },
        selfMute: true,
    },
        {
            channelId: "1430561057436598372",
            serverId: "1372543856515747943",
            token: process.env.token9,
            selfDeaf: true,
            autoReconnect: {
                enabled: true,
                delay: 5,
                maxRetries: 5,
            },
            presence: {
                status: "dnd",
            },
            selfMute: true,
        },
        {
            channelId: "1508328514082836551",
            serverId: "1372543856515747943",
            token: process.env.token10,
            selfDeaf: true,
            autoReconnect: {
                enabled: true,
                delay: 5,
                maxRetries: 5,
            },
            presence: {
                status: "dnd",
            },
            selfMute: true,
        },
];
