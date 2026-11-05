var i = n(477900),
    r = n(582128),
    a = n(189213),
    s = n(192308),
    l = n(465532),
    o = n(566908),
    d = n(388096),
    c = n(792996);
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";
n.d(
    t,
    {},
    {
        default: function (e) {
            let { channel: t, transitionState: n, onClose: _, defaultValue: E, onSubmit: A, onClear: f } = e,
                [h, I] = r.useState(E),
                p = (0, o.Vf)(h);
            return (0, i.jsx)(a.a, {
                transitionState: n,
                size: "md",
                title: c.intl.string(c.t["3+ii4F"]),
                onClose: _,
                actions: [
                    {
                        variant: "secondary",
                        text: null != f ? c.intl.string(c.t.VkKicb) : c.intl.string(c.t["ETE/oC"]),
                        onClick:
                            null != f
                                ? function () {
                                      (f?.(), (0, s.Oo)(u));
                                  }
                                : _,
                    },
                    {
                        variant: "primary",
                        text: c.intl.string(c.t.iQ1SwX),
                        onClick: function () {
                            let e = h.toISOString();
                            (null != A ? A(e) : l.A.changeScheduledMessage(t.id, { scheduledTimestamp: e }),
                                (0, s.Oo)(u));
                        },
                        disabled: null != p,
                    },
                ],
                children: (0, i.jsx)(d.A, { defaultValue: E, onChange: I }),
            });
        },
        t: u,
    },
);
