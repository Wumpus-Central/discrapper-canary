n.d(t, {
    EG: () => a,
    KC: () => l,
    Nj: () => s,
    Vr: () => o,
    cm: () => i
});
var r = n(570140);
let i = (e) => {
        r.Z.dispatch({
            type: 'DCF_HANDLE_DC_SHOWN',
            dismissibleContent: e
        });
    },
    o = (e) => {
        r.Z.dispatch({
            type: 'DCF_HANDLE_DC_DISMISSED',
            dismissibleContent: e
        });
    },
    a = () => {
        r.Z.dispatch({ type: 'DCF_RESET' });
    },
    s = (e) => {
        r.Z.dispatch({
            type: 'DCF_DAILY_CAP_OVERRIDE',
            value: e
        });
    },
    l = (e) => {
        r.Z.dispatch({
            type: 'DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE',
            value: e
        });
    };
