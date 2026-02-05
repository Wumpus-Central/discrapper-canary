r.d(e, { A: () => s });
var i = r(627968);
r(64700);
var n = r(397927),
    E = r(985018);
let c = (t, e) =>
        (0, i.jsxs)(
            n.Text,
            {
                color: "text-feedback-critical",
                style: { display: "flex", gap: "4px", margin: "8px 0 4px 0", alignItems: "center" },
                variant: "text-sm/normal",
                children: [(0, i.jsx)(n.EpV, { size: "custom", color: "currentColor", width: 14, height: 14 }), t],
            },
            e,
        ),
    s = {
        getTextInVoiceSendMessageChannelPermissionText: function (t) {
            return t ? E.intl.format(E.t.Q1rwpr, { warningHook: c }) : E.intl.string(E.t.WQ6zpT);
        },
        getTextInVoiceReadMessageHistoryChannelPermissionText: function (t) {
            return t ? E.intl.format(E.t.Rx4pbJ, { warningHook: c }) : E.intl.string(E.t.cuMfH0);
        },
    };
