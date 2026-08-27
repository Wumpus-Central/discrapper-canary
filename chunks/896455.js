"use strict";
n.d(t, { default: () => u, t: () => c });
var i = n(477900),
    r = n(582128),
    a = n(189213),
    s = n(192308),
    l = n(465532),
    o = n(388096),
    d = n(375708);
let c = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";
function u(e) {
    let { channel: t, transitionState: n, onClose: u, defaultValue: _, onSubmit: E, onClear: A } = e,
        [h, I] = r.useState(_);
    return (0, i.jsx)(a.Modal, {
        transitionState: n,
        size: "md",
        title: d.intl.string(d.t["3+ii4F"]),
        onClose: u,
        actions: [
            {
                variant: "secondary",
                text: null != A ? d.intl.string(d.t.VkKicb) : d.intl.string(d.t["ETE/oC"]),
                onClick:
                    null != A
                        ? function () {
                              A?.(), (0, s.closeModal)(c);
                          }
                        : u,
            },
            {
                variant: "primary",
                text: d.intl.string(d.t.iQ1SwX),
                onClick: function () {
                    let e = h.toISOString();
                    null != E ? E(e) : l.A.changeScheduledMessage(t.id, { scheduledTimestamp: e }),
                        (0, s.closeModal)(c);
                },
            },
        ],
        children: (0, i.jsx)(o.A, { defaultValue: _, onChange: I }),
    });
}
