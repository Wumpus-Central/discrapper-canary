r.d(n, {
    EG: function () {
        return s;
    },
    KC: function () {
        return u;
    },
    Nj: function () {
        return l;
    },
    Vr: function () {
        return o;
    },
    cm: function () {
        return a;
    }
});
var i = r(570140);
let a = (e) => {
        i.Z.dispatch({
            type: 'DCF_HANDLE_DC_SHOWN',
            dismissibleContent: e
        });
    },
    o = (e) => {
        i.Z.dispatch({
            type: 'DCF_HANDLE_DC_DISMISSED',
            dismissibleContent: e
        });
    },
    s = () => {
        i.Z.dispatch({ type: 'DCF_RESET' });
    },
    l = (e) => {
        i.Z.dispatch({
            type: 'DCF_DAILY_CAP_OVERRIDE',
            value: e
        });
    },
    u = (e) => {
        i.Z.dispatch({
            type: 'DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE',
            value: e
        });
    };
