n.d(t, {
    QH: () => o,
    pj: () => a,
});
var r,
    l = n(427164),
    a =
        (((r = {}).NO_BADGE = "no_badge"),
        (r.FIRST_BLOCK_ONLY = "first_block_only"),
        (r.RIGHT_BLOCK_ONLY = "right_block_only"),
        (r.BOTH_BLOCKS = "both_blocks"),
        r);
let s = (0, l.le)({
        name: "2025-10-collectibles-featured-block-new-badge",
        kind: "user",
        defaultConfig: { variant: "no_badge" },
        variations: {
            0: { variant: "no_badge" },
            1: { variant: "first_block_only" },
            2: { variant: "right_block_only" },
            3: { variant: "both_blocks" },
        },
    }),
    o = (e) => s.useConfig({ location: e }).variant;
