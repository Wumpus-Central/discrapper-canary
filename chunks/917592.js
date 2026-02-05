n.d(t, { A: () => a });
var i = n(652215),
    l = n(985018);
let a = {
    getStatus: function (e) {
        let t,
            n,
            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case i.S7L.CONNECTING:
                (t = i.vkP.CONNECTING), (n = l.intl.string(l.t.MzW9sN));
                break;
            case i.S7L.AUTHENTICATING:
                (t = i.vkP.CONNECTING), (n = l.intl.string(l.t.GxXwE2));
                break;
            case i.S7L.AWAITING_ENDPOINT:
                (t = i.vkP.CONNECTING), (n = l.intl.string(l.t.xEbu0Q));
                break;
            case i.S7L.RTC_CONNECTED:
                (t = i.vkP.CONNECTED), (n = a ? l.intl.string(l.t.HtVOdd) : l.intl.string(l.t.daXg45));
                break;
            case i.S7L.RTC_CONNECTING:
                (t = i.vkP.CONNECTING), (n = l.intl.string(l.t.Gp51dl));
                break;
            case i.S7L.ICE_CHECKING:
                (t = i.vkP.CONNECTING), (n = l.intl.string(l.t["rdCyA/"]));
                break;
            case i.S7L.DTLS_CONNECTING:
                (t = i.vkP.CONNECTING), (n = l.intl.string(l.t.UvB3gV));
                break;
            case i.S7L.NO_ROUTE:
                (t = i.vkP.ERROR), (n = l.intl.string(l.t.mGhOIi));
                break;
            case i.S7L.RTC_DISCONNECTED:
                (t = i.vkP.ERROR), (n = l.intl.string(l.t.M7LDmE));
                break;
            case i.S7L.DISCONNECTED:
            default:
                (t = i.vkP.ERROR), (n = l.intl.string(l.t.NLKQbx));
        }
        return { connectionStatus: t, connectionStatusText: n };
    },
    getShortHostname: function (e) {
        return null == e ? "" : e.split(".")[0];
    },
};
