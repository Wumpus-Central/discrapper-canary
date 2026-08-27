"use strict";
n.d(t, { default: () => _, t: () => u });
var i = n(477900),
    r = n(582128),
    a = n(189213),
    s = n(192308),
    l = n(465532),
    o = n(674470),
    d = n(388096),
    c = n(375708);
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";
function _(e) {
    let { channel: t, transitionState: n, onClose: _, defaultValue: E, onSubmit: A, onClear: h } = e,
        [I, f] = r.useState(E),
        p = (0, o.Vf)(I);
    return (0, i.jsx)(a.Modal, {
        transitionState: n,
        size: "md",
        title: c.intl.string(c.t["3+ii4F"]),
        onClose: _,
        actions: [
            {
                variant: "secondary",
                text: null != h ? c.intl.string(c.t.VkKicb) : c.intl.string(c.t["ETE/oC"]),
                onClick:
                    null != h
                        ? function () {
                              h?.(), (0, s.closeModal)(u);
                          }
                        : _,
            },
            {
                variant: "primary",
                text: c.intl.string(c.t.iQ1SwX),
                onClick: function () {
                    let e = I.toISOString();
                    null != A ? A(e) : l.A.changeScheduledMessage(t.id, { scheduledTimestamp: e }),
                        (0, s.closeModal)(u);
                },
                disabled: null != p,
            },
        ],
        children: (0, i.jsx)(d.A, { defaultValue: E, onChange: f }),
    });
}
