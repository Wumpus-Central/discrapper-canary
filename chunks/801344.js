n.d(t, {
    Br: () => a,
    QL: () => c,
    VD: () => _,
    VX: () => u,
    nS: () => l,
    n_: () => r,
    nn: () => o,
    pw: () => s,
    zS: () => d,
});
var i,
    r =
        (((i = {}).GameStart = "lol_game_start"),
        (i.GameEnd = "lol_game_end"),
        (i.Respawn = "lol_respawn"),
        (i.ChampionKill = "lol_champion_kill"),
        (i.ChampionAssist = "lol_champion_assist"),
        (i.ChampionDeath = "lol_champion_death"),
        (i.DoubleKill = "lol_double_kill"),
        (i.TripleKill = "lol_triple_kill"),
        (i.QuadraKill = "lol_quadra_kill"),
        (i.PentaKill = "lol_penta_kill"),
        (i.TurretKill = "lol_turret_kill"),
        (i.InhibitorKill = "lol_inhibitor_kill"),
        (i.DragonKill = "lol_dragon_kill"),
        (i.DragonSteal = "lol_dragon_steal"),
        (i.BaronKill = "lol_baron_kill"),
        (i.BaronSteal = "lol_baron_steal"),
        (i.LevelUp = "lol_level_up"),
        (i.ItemPurchase = "lol_item_purchase"),
        (i.Victory = "lol_victory"),
        (i.Defeat = "lol_defeat"),
        (i.TeamFightWin = "lol_team_fight_win"),
        (i.TeamFight = "lol_team_fight"),
        i);
let a = { 2: "lol_double_kill", 3: "lol_triple_kill", 4: "lol_quadra_kill", 5: "lol_penta_kill" },
    s = 1 / 3;
function l(e) {
    return 1 + (1 - Math.max(0, Math.min(1, e))) * 0.19999999999999996;
}
let o = "teamFightScore",
    d = "teamFightStartMs",
    c = "teamFightEndMs";
function u(e, t) {
    let n = "BLUE" === t ? "RED" : "BLUE",
        i = e.participantsByTeam[t].size,
        r = e.participantsByTeam[n].size;
    return e.deathsByTeam[n] - e.deathsByTeam[t] + (r - i) * 0.5;
}
function _(e) {
    return Math.max(0, 0.075 * e);
}
