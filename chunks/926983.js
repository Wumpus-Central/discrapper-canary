r.d(e, { A: () => l });
var i = r(627968);
r(64700);
var n = r(834730),
    E = r(695366),
    c = r(985018);
let s = (t, e) =>
        (0, i.jsxs)(
            n.E,
            {
                color: "text-feedback-critical",
                style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
                variant: "text-sm/normal",
                children: [(0, i.jsx)(E.E, { size: "custom", color: "currentColor", width: 14, height: 14 }), t],
            },
            e,
        ),
    l = {
        getTextInVoiceSendMessageChannelPermissionText: function (t) {
            return t ? c.intl.format(c.t.Q1rwpr, { warningHook: s }) : c.intl.string(c.t.WQ6zpT);
        },
        getTextInVoiceReadMessageHistoryChannelPermissionText: function (t) {
            return t ? c.intl.format(c.t.Rx4pbJ, { warningHook: s }) : c.intl.string(c.t.cuMfH0);
        },
    };
