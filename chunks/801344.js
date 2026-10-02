n.d(t, {
    Br: () => s,
    QL: () => A,
    VD: () => f,
    VX: () => I,
    j3: () => l,
    kt: () => c,
    nS: () => u,
    n_: () => a,
    nn: () => _,
    pw: () => d,
    ym: () => o,
    zS: () => E,
    zd: () => h,
});
var i,
    r = n(696016),
    a =
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
let s = { 2: "lol_double_kill", 3: "lol_triple_kill", 4: "lol_quadra_kill", 5: "lol_penta_kill" },
    l = {
        lol_champion_kill: { scoreBoost: 0.15, eventType: r.rb.KILL, triggerClipCandidate: !0 },
        lol_champion_assist: { scoreBoost: 0.06, eventType: r.rb.ASSIST, triggerClipCandidate: !0 },
        lol_champion_death: { scoreBoost: 0, eventType: r.rb.DEATH, triggerClipCandidate: !1 },
        lol_double_kill: { scoreBoost: 0.05, eventType: r.rb.MULTIKILL, triggerClipCandidate: !0 },
        lol_triple_kill: { scoreBoost: 0.05, eventType: r.rb.MULTIKILL, triggerClipCandidate: !0 },
        lol_quadra_kill: { scoreBoost: 0.05, eventType: r.rb.MULTIKILL, triggerClipCandidate: !0 },
        lol_penta_kill: { scoreBoost: 0.1, eventType: r.rb.MULTIKILL, triggerClipCandidate: !0 },
        lol_turret_kill: { scoreBoost: 0.05, eventType: r.rb.OBJECTIVE_KILL, triggerClipCandidate: !1 },
        lol_inhibitor_kill: { scoreBoost: 0.5, eventType: r.rb.OBJECTIVE_KILL, triggerClipCandidate: !1 },
        lol_dragon_kill: { scoreBoost: 0.1, eventType: r.rb.OBJECTIVE_KILL, triggerClipCandidate: !0 },
        lol_dragon_steal: { scoreBoost: 0.2, eventType: r.rb.OBJECTIVE_KILL, triggerClipCandidate: !0 },
        lol_baron_kill: { scoreBoost: 0.2, eventType: r.rb.OBJECTIVE_KILL, triggerClipCandidate: !0 },
        lol_baron_steal: { scoreBoost: 0.4, eventType: r.rb.OBJECTIVE_KILL, triggerClipCandidate: !0 },
        lol_team_fight_win: { scoreBoost: 0, eventType: r.rb.MULTIKILL, triggerClipCandidate: !0 },
        lol_team_fight: { scoreBoost: 0, eventType: r.rb.UNCLASSIFIED, triggerClipCandidate: !1 },
        lol_level_up: { scoreBoost: 0, eventType: r.rb.LEVEL_UP, triggerClipCandidate: !1 },
        lol_item_purchase: { scoreBoost: 0, eventType: r.rb.ITEM, triggerClipCandidate: !1 },
        lol_victory: { scoreBoost: 0.2, eventType: r.rb.VICTORY, triggerClipCandidate: !0 },
        lol_defeat: { scoreBoost: 0, eventType: r.rb.DEFEAT, triggerClipCandidate: !1 },
    },
    o = 1 / 4,
    d = 1 / 3,
    c = "health";
function u(e) {
    return 1 + (1 - Math.max(0, Math.min(1, e))) * 0.19999999999999996;
}
let _ = "teamFightScore",
    E = "teamFightStartMs",
    A = "teamFightEndMs",
    h = 0.25;
function I(e, t) {
    let n = "BLUE" === t ? "RED" : "BLUE",
        i = e.participantsByTeam[t].size,
        r = e.participantsByTeam[n].size;
    return e.deathsByTeam[n] - e.deathsByTeam[t] + (r - i) * 0.5;
}
function f(e) {
    return Math.max(0, 0.075 * e);
}
