l.d(a, { default: () => C });
var i = l(477900),
    t = l(582128),
    n = l(189213),
    o = l(103557),
    s = l(911608),
    r = l(376357),
    u = l(331322),
    c = l(691885);
l(321073);
var d = l(562708),
    p = l(636537),
    h = l(77729),
    m = l(144009),
    b = l(53677),
    v = l(652215);
let f = -1 / 0;
async function _(e) {
    let { clip: a, rating: l, description: i, onProgress: t } = e,
        n = await h.A.clips.loadClip(a.filepath),
        o = new File([n.data], n.filename, { type: "video/mp4" }),
        s = [
            { name: "clip_uuid", value: a.id },
            { name: "rating", value: l },
            { name: "clip_type", value: (0, b.NM)(a) },
        ];
    null != i && "" !== i && s.push({ name: "description", value: i });
    let r = (0, d.getSuperProperties)();
    if (
        (r?.os != null && s.push({ name: "os", value: r.os }),
        r?.os_version != null && s.push({ name: "os_version", value: r.os_version }),
        r?.client_version != null && s.push({ name: "client_version", value: r.client_version }),
        r?.client_build_number != null && s.push({ name: "client_build_number", value: `${r.client_build_number}` }),
        r?.release_channel != null && s.push({ name: "release_channel", value: r.release_channel }),
        performance.now() - f >= 9e5)
    )
        try {
            (await (0, m.a)(v.Umv.WEB_APP), (f = performance.now()));
        } catch (e) {}
    return p.Bo.post({
        url: v.Rsh.CLIP_FEEDBACK,
        attachments: [{ name: "file", file: o, filename: o.name }],
        fields: s,
        rejectWithError: !0,
        onRequestProgress: t,
    });
}
var g = l(696016);
let y = [
    { id: "good", label: "Good", value: "good" },
    { id: "neutral", label: "Neutral", value: "neutral" },
    { id: "bad", label: "Bad", value: "bad" },
];
function C(e) {
    let { clip: a, transitionState: l, onClose: d } = e,
        [p, h] = t.useState(null),
        [m, b] = t.useState(0),
        [v, f] = t.useState(""),
        [C, w] = t.useState(!1);
    async function k() {
        if (null != p) {
            w(!0);
            try {
                (await _({
                    clip: a,
                    rating: p,
                    description: v,
                    onProgress: (e) => {
                        b(e.loaded / e.total);
                    },
                }),
                    (0, r.P0)((0, r.ox)("Thanks for your feedback!", r.Ck.SUCCESS)),
                    d());
            } catch (e) {
                (g.nx.error("Failed to submit clip feedback", e),
                    (0, r.P0)((0, r.ox)("Failed to submit clip feedback. Please try again.", r.Ck.FAILURE)));
            } finally {
                w(!1);
            }
        }
    }
    return (0, i.jsx)(n.a, {
        transitionState: l,
        onClose: d,
        title: "Clip Feedback",
        subtitle:
            "Rate this clip to help us improve clip quality. The clip is attached automatically. We will use this clip for model training, so please don't complete this form if you don't want your clip to be used in this way.",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: d, disabled: C },
            { text: "Submit", variant: "primary", onClick: k, disabled: null == p, loading: C },
        ],
        children: (0, i.jsxs)(u.B, {
            gap: 16,
            children: [
                (0, i.jsx)(c.l, {
                    label: "Rating",
                    placeholder: "How good was this clip?",
                    selectionMode: "single",
                    options: y,
                    value: p,
                    onSelectionChange: h,
                }),
                (0, i.jsx)(o.f, {
                    label: "Description (optional)",
                    placeholder: "Anything else you want to say about this clip?",
                    value: v,
                    onChange: f,
                    maxLength: 5e4,
                    autosize: !0,
                }),
                C &&
                    (0, i.jsx)(s.z, {
                        value: m,
                        minValue: 0,
                        maxValue: 1,
                        isIndeterminate: !1,
                        size: "sm",
                        "aria-label": "Submitting progress",
                    }),
            ],
        }),
    });
}
