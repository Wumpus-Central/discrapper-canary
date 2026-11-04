c.d(e, { E: () => M });
var n = c(477900),
    t = c(582128);
let r =
    "https://cdn.discordapp.com/assets/content/03622d5cf6122c0557116bfd66c48955caf9a146c3dc6dcbd53c94fe0fe58a3a.riv";
var _ = c(729901),
    i = c(611361),
    d = c(799226),
    o = c(270597);
let h = {
        Game_Server_Hosting_Main: { reducedMotion: "boolean" },
        c_chara_5: {},
        hytale_gameplay: { reducedMotion: "boolean" },
        c_chara_1: {},
        c_chara_4: {},
        c_chara_2: {},
        c_chara_3: {},
    },
    l = {
        Game_Server_Hosting_Main: ["Instance"],
        c_chara_5: [],
        hytale_gameplay: ["Instance"],
        c_chara_1: [],
        c_chara_4: [],
        c_chara_2: [],
        c_chara_3: [],
    },
    s = {
        Game_Server_Hosting_Main: ["SM_Auto", "SM_Main_Int"],
        c_chara_5: ["State Machine 1"],
        hytale_gameplay: ["State Machine 1"],
        c_chara_1: ["State Machine 1"],
        c_chara_4: ["State Machine 1"],
        c_chara_2: ["State Machine 1"],
        c_chara_3: ["State Machine 1"],
    },
    u = {
        Game_Server_Hosting_Main: function (a) {
            let { dataBinding: e } = a,
                { instance: c, reducedMotionEnabled: n, playIfNeeded: t } = (0, i.o)();
            return ((0, o.Dr)("reducedMotion", c, e?.reducedMotion ?? n, void 0, t), null);
        },
        hytale_gameplay: function (a) {
            let { dataBinding: e } = a,
                { instance: c, reducedMotionEnabled: n, playIfNeeded: t } = (0, i.o)();
            return ((0, o.Dr)("reducedMotion", c, e?.reducedMotion ?? n, void 0, t), null);
        },
    };
function M(a) {
    let { artboard: e = "Game_Server_Hosting_Main", stateMachine: c, dataBinding: i, onDataBindingChange: o, ...M } = a,
        { status: g, buffer: p } = (0, d.CE)(r),
        S = (0, d.m2)(r),
        b = t.useCallback(() => {
            let a = u[e];
            return null == a ? null : (0, n.jsx)(a, { dataBinding: i, onDataBindingChange: o });
        }, [e, i, o]);
    return g === d.BW.Loading
        ? null
        : (0, n.jsx)(_.w, {
              ...(S ? { key: "override" } : {}),
              buffer: p,
              artboard: e,
              stateMachine: c,
              artboardProperties: h,
              artboardViewModelInstances: l,
              artboardStateMachines: s,
              renderDataBinding: b,
              ...M,
          });
}
M.riveSrc = r;
