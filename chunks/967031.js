n.d(t, { Z: () => d }), n(47120);
var r = n(239091),
    i = n(147913),
    o = n(40851),
    a = n(574254),
    s = n(585483),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class u extends i.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                OVERLAY_SET_INPUT_LOCKED: () => {
                    null != a.Z.getContextMenu() && (0, r.Zy)();
                    let e = (0, o.Su)();
                    null != e && e.windowDispatch.dispatch(l.CkL.POPOUT_CLOSE), s.S.dispatch(l.CkL.MODAL_CLOSE);
                }
            });
    }
}
let d = new u();
