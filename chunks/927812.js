l.d(t, { x: () => i });
var n = l(435558),
    a = l(288106);
function i(e, t, l) {
    if (null != e)
        switch (t) {
            case a.GM.IN_PROGRESS: {
                let t = e.inProgress?.progressSteps;
                if (null == t || 0 === t.length) return;
                return t[(0, n.clamp)(l, 0, t.length - 1)];
            }
            case a.GM.EARNED:
                return e.earned;
            case a.GM.CONSUMED:
                return e.consumed;
            default:
                return;
        }
}
