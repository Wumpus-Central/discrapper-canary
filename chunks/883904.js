n.d(t, {
    EG: () => s,
    KC: () => l,
    Nj: () => o,
    Vr: () => a,
    cm: () => r
});
var i = n(570140);
let r = (e) => {
        i.Z.dispatch({
            type: 'DCF_HANDLE_DC_SHOWN',
            dismissibleContent: e
        });
    },
    a = (e) => {
        i.Z.dispatch({
            type: 'DCF_HANDLE_DC_DISMISSED',
            dismissibleContent: e
        });
    },
    s = () => {
        i.Z.dispatch({ type: 'DCF_RESET' });
    },
    o = (e) => {
        i.Z.dispatch({
            type: 'DCF_DAILY_CAP_OVERRIDE',
            value: e
        });
    },
    l = (e) => {
        i.Z.dispatch({
            type: 'DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE',
            value: e
        });
    };
