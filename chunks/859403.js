var i = n(477900),
    r = n(873298),
    a = n(858899),
    s = n(192308),
    l = n(157559),
    o = n(793574),
    d = n(113367),
    c = n(188567),
    u = n(566908),
    _ = n(652215),
    E = n(792996);
n.d(
    t,
    {},
    {
        Do: function (e) {
            (0, a.P0)({ text: E.intl.formatToPlainString(E.t["uy++C+"], { error: e }), variant: "critical" });
        },
        Ki: function () {
            (0, d.Dc)({ message: E.intl.string(E.t["BHCm/d"]), icon: "clock" });
        },
        Re: function () {
            (0, d.Dc)({ message: E.intl.string(E.t["JF/LWn"]), icon: "clock" });
        },
        c_: function (e) {
            let t = E.intl.formatToPlainString(E.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
            (0, d.Dc)({ message: t, icon: "clock" });
        },
        kM: function (e) {
            (0, a.P0)({ text: E.intl.formatToPlainString(E.t.sUvyW3, { error: e }), variant: "critical" });
        },
        kb: function () {
            (0, d.Dc)({ message: E.intl.string(E.t.MXsMRk), icon: "clock" });
        },
        vh: function (e) {
            if (e.body?.code !== _.t02.TOO_MANY_SCHEDULED_MESSAGES) {
                var t;
                return void ((t = e.body?.message ?? e.message),
                (0, a.P0)({ text: E.intl.formatToPlainString(E.t.PsJmUe, { error: t }), variant: "critical" }));
            }
            let { limit: d, isUpgradable: A } = (0, u.ZG)("ScheduledMessagesCreateRoadblock");
            A
                ? (0, s.mM)(async () => {
                      let { default: e } = await Promise.all([n.e(454048), n.e(300699), n.e(717907), n.e(952582)]).then(
                          n.bind(n, 853861),
                      );
                      return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: [o.A.SCHEDULED_MESSAGES_ROADBLOCK] });
                  })
                : l.A.show({
                      title: E.intl.string(E.t.RLdUVh),
                      body: E.intl.formatToPlainString(E.t["3AMt7r"], { max: d }),
                      cancelText: E.intl.string(E.t.BddRzS),
                      confirmText: E.intl.string(E.t.lv6bDa),
                      onConfirm: () => c._.dispatch(_.jej.TOGGLE_INBOX, r.Y2.SCHEDULED),
                  });
        },
        xP: function (e) {
            (0, a.P0)({ text: E.intl.formatToPlainString(E.t.slM6In, { error: e }), variant: "critical" });
        },
    },
);
