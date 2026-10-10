a.d(t, { x: () => n });
var r = a(435558),
    l = a(288106);
function n(e, t, a) {
    if (null != e)
        switch (t) {
            case l.GM.IN_PROGRESS: {
                let t = e.inProgress?.progressSteps;
                if (null == t || 0 === t.length) return;
                return t[(0, r.clamp)(a, 0, t.length - 1)];
            }
            case l.GM.EARNED:
                return e.earned;
            case l.GM.CONSUMED:
                return e.consumed;
            default:
                return;
        }
}
