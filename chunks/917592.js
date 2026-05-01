n.d(t, { A: () => s });
var l = n(652215),
    i = n(985018);
let s = {
    getStatus: function (e) {
        let t,
            n,
            s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case l.S7L.CONNECTING:
                (t = l.vkP.CONNECTING), (n = i.intl.string(i.t.MzW9sN));
                break;
            case l.S7L.AUTHENTICATING:
                (t = l.vkP.CONNECTING), (n = i.intl.string(i.t.GxXwE2));
                break;
            case l.S7L.AWAITING_ENDPOINT:
                (t = l.vkP.CONNECTING), (n = i.intl.string(i.t.xEbu0Q));
                break;
            case l.S7L.RTC_CONNECTED:
                (t = l.vkP.CONNECTED), (n = s ? i.intl.string(i.t.HtVOdd) : i.intl.string(i.t.daXg45));
                break;
            case l.S7L.RTC_CONNECTING:
                (t = l.vkP.CONNECTING), (n = i.intl.string(i.t.Gp51dl));
                break;
            case l.S7L.ICE_CHECKING:
                (t = l.vkP.CONNECTING), (n = i.intl.string(i.t["rdCyA/"]));
                break;
            case l.S7L.DTLS_CONNECTING:
                (t = l.vkP.CONNECTING), (n = i.intl.string(i.t.UvB3gV));
                break;
            case l.S7L.NO_ROUTE:
                (t = l.vkP.ERROR), (n = i.intl.string(i.t.mGhOIi));
                break;
            case l.S7L.RTC_DISCONNECTED:
                (t = l.vkP.ERROR), (n = i.intl.string(i.t.M7LDmE));
                break;
            case l.S7L.DISCONNECTED:
            default:
                (t = l.vkP.ERROR), (n = i.intl.string(i.t.NLKQbx));
        }
        return { connectionStatus: t, connectionStatusText: n };
    },
    getShortHostname: function (e) {
        return null == e ? "" : e.split(".")[0];
    },
};
