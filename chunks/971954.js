"use strict";
n.d(t, { iX: () => l, ls: () => s, sg: () => a });
let i = {
    0: [
        { x: 13.6, y: 56.8 },
        { x: 27.5, y: 50.5 },
        { x: 40.5, y: 44.5 },
        { x: 12.5, y: 69 },
        { x: 23.5, y: 75 },
        { x: 12.5, y: 85 },
        { x: 38, y: 63 },
        { x: 45, y: 60 },
        { x: 51.7, y: 57 },
        { x: 58, y: 60 },
        { x: 65, y: 63 },
        { x: 67.4, y: 76.5 },
        { x: 79.2, y: 69.2 },
        { x: 92.5, y: 76.5 },
        { x: 75, y: 90 },
        { x: 85.5, y: 49 },
        { x: 94.5, y: 46 },
        { x: 96, y: 54 },
        { x: 39.5, y: 7 },
        { x: 49.5, y: 10 },
        { x: 60, y: 7 },
    ],
};
var r = n(821578);
let a = "guild-room";
function s(e, t) {
    let n = l[r.I.DEFAULT].seats.find((n) => n.position.x === e && n.position.y === t);
    return n?.name ?? "";
}
let l = {
    [r.I.DEFAULT]: {
        background:
            "https://cdn.discordapp.com/assets/content/953fe0f3c32fb58ba28de77c49726e4cf1c7d4b34d3f6e6c17b95195469a58cb.jpg",
        aspectRatio: 1337 / 972,
        seats: [
            { name: "PC_SEAT_1", position: i[r.I.DEFAULT][0] },
            { name: "PC_SEAT_2", position: i[r.I.DEFAULT][1] },
            { name: "PC_SEAT_3", position: i[r.I.DEFAULT][2] },
            { name: "DUO_SEAT_1", position: i[r.I.DEFAULT][3] },
            { name: "DUO_SEAT_2", position: i[r.I.DEFAULT][4] },
            { name: "DUO_SEAT_STANDING_1", position: i[r.I.DEFAULT][5] },
            { name: "MAIN_COUCH_SEAT_1", position: i[r.I.DEFAULT][6] },
            { name: "MAIN_COUCH_SEAT_2", position: i[r.I.DEFAULT][7] },
            { name: "MAIN_COUCH_SEAT_3", position: i[r.I.DEFAULT][8] },
            { name: "MAIN_COUCH_SEAT_4", position: i[r.I.DEFAULT][9] },
            { name: "MAIN_COUCH_SEAT_5", position: i[r.I.DEFAULT][10] },
            { name: "SIDE_GROUP_SEAT_1", position: i[r.I.DEFAULT][11] },
            { name: "SIDE_GROUP_SEAT_2", position: i[r.I.DEFAULT][12] },
            { name: "SIDE_GROUP_SEAT_3", position: i[r.I.DEFAULT][13] },
            { name: "SIDE_GROUP_SEAT_STANDING_1", position: i[r.I.DEFAULT][14] },
            { name: "BACKROOM_SEAT_1", position: i[r.I.DEFAULT][15], dim: !0 },
            { name: "BACKROOM_SEAT_2", position: i[r.I.DEFAULT][16], dim: !0 },
            { name: "BACKROOM_SEAT_3", position: i[r.I.DEFAULT][17], dim: !0 },
            { name: "RAFTERS_SEAT_1", position: i[r.I.DEFAULT][18] },
            { name: "RAFTERS_SEAT_2", position: i[r.I.DEFAULT][19] },
            { name: "RAFTERS_SEAT_3", position: i[r.I.DEFAULT][20] },
        ],
    },
};
