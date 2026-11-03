n.d(t, { x: () => s });
var r = n(435558),
    l = n(288106);
function s(e, t, n) {
    if (null != e)
        switch (t) {
            case l.GM.IN_PROGRESS: {
                let t = e.inProgress?.progressSteps;
                if (null == t || 0 === t.length) return;
                return t[(0, r.clamp)(n, 0, t.length - 1)];
            }
            case l.GM.EARNED:
                return e.earned;
            case l.GM.CONSUMED:
                return e.consumed;
            default:
                return;
        }
}
