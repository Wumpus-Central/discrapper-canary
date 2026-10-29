a.d(t, { x: () => l });
var r = a(435558),
    n = a(288106);
function l(e, t, a) {
    if (null != e)
        switch (t) {
            case n.GM.IN_PROGRESS: {
                let t = e.inProgress?.progressSteps;
                if (null == t || 0 === t.length) return;
                return t[(0, r.clamp)(a, 0, t.length - 1)];
            }
            case n.GM.EARNED:
                return e.earned;
            case n.GM.CONSUMED:
                return e.consumed;
            default:
                return;
        }
}
