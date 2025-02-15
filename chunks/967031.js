n.d(t, { Z: () => f }), n(47120);
var i = n(239091),
    r = n(572691),
    a = n(147913),
    s = n(40851),
    o = n(574254),
    l = n(585483),
    u = n(981631);
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
class d extends a.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                OVERLAY_SET_INPUT_LOCKED: () => {
                    null != o.Z.getContextMenu() && (0, i.Zy)();
                    let e = (0, s.Su)();
                    null != e && e.windowDispatch.dispatch(u.CkL.POPOUT_CLOSE), l.S.dispatch(u.CkL.MODAL_CLOSE), r.Z.popAll();
                }
            });
    }
}
let f = new d();
