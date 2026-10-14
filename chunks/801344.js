n.d(t, { Br: () => s, nS: () => o, n_: () => a, pw: () => l, yO: () => i });
let i = {
    joinWindowS: 12,
    maxDurationS: 50,
    minKills: 3,
    minParticipants: 6,
    minParticipantsPerTeam: 2,
    scorePerPoint: 0.075,
};
var r,
    a =
        (((r = {}).GameStart = "lol_game_start"),
        (r.GameEnd = "lol_game_end"),
        (r.Respawn = "lol_respawn"),
        (r.ChampionKill = "lol_champion_kill"),
        (r.ChampionAssist = "lol_champion_assist"),
        (r.ChampionDeath = "lol_champion_death"),
        (r.DoubleKill = "lol_double_kill"),
        (r.TripleKill = "lol_triple_kill"),
        (r.QuadraKill = "lol_quadra_kill"),
        (r.PentaKill = "lol_penta_kill"),
        (r.TurretKill = "lol_turret_kill"),
        (r.InhibitorKill = "lol_inhibitor_kill"),
        (r.DragonKill = "lol_dragon_kill"),
        (r.DragonSteal = "lol_dragon_steal"),
        (r.ElderDragonKill = "lol_elder_dragon_kill"),
        (r.ElderDragonSteal = "lol_elder_dragon_steal"),
        (r.BaronKill = "lol_baron_kill"),
        (r.BaronSteal = "lol_baron_steal"),
        (r.LevelUp = "lol_level_up"),
        (r.ItemPurchase = "lol_item_purchase"),
        (r.Victory = "lol_victory"),
        (r.Defeat = "lol_defeat"),
        (r.TeamFightWin = "lol_team_fight_win"),
        (r.TeamFight = "lol_team_fight"),
        r);
let s = { 2: "lol_double_kill", 3: "lol_triple_kill", 4: "lol_quadra_kill", 5: "lol_penta_kill" },
    l = 1 / 3;
function o(e) {
    return 1 + (1 - Math.max(0, Math.min(1, e))) * 0.19999999999999996;
}
