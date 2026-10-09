l.d(a, { default: () => w });
var t = l(477900),
    i = l(582128),
    n = l(189213),
    s = l(103557),
    o = l(911608),
    r = l(858899),
    u = l(331322),
    c = l(691885);
l(321073);
var d = l(562708),
    p = l(636537),
    h = l(77729),
    m = l(144009),
    v = l(53677),
    b = l(652215);
let f = -1 / 0;
async function _(e) {
    let { clip: a, rating: l, description: t, onProgress: i } = e,
        n = await h.A.clips.loadClip(a.filepath),
        s = new File([n.data], n.filename, { type: "video/mp4" }),
        o = [
            { name: "clip_uuid", value: a.id },
            { name: "rating", value: l },
            { name: "clip_type", value: (0, v.NM)(a) },
        ];
    null != t && "" !== t && o.push({ name: "description", value: t });
    let r = (0, d.getSuperProperties)();
    if (
        (r?.os != null && o.push({ name: "os", value: r.os }),
        r?.os_version != null && o.push({ name: "os_version", value: r.os_version }),
        r?.client_version != null && o.push({ name: "client_version", value: r.client_version }),
        r?.client_build_number != null && o.push({ name: "client_build_number", value: `${r.client_build_number}` }),
        r?.release_channel != null && o.push({ name: "release_channel", value: r.release_channel }),
        performance.now() - f >= 9e5)
    )
        try {
            (await (0, m.a)(b.Umv.WEB_APP), (f = performance.now()));
        } catch (e) {}
    return p.Bo.post({
        url: b.Rsh.CLIP_FEEDBACK,
        attachments: [{ name: "file", file: s, filename: s.name }],
        fields: o,
        rejectWithError: !0,
        onRequestProgress: i,
    });
}
var g = l(696016);
let y = [
    { id: "good", label: "Good", value: "good" },
    { id: "neutral", label: "Neutral", value: "neutral" },
    { id: "bad", label: "Bad", value: "bad" },
];
function w(e) {
    let { clip: a, transitionState: l, onClose: d } = e,
        [p, h] = i.useState(null),
        [m, v] = i.useState(0),
        [b, f] = i.useState(""),
        [w, x] = i.useState(!1);
    async function C() {
        if (null != p) {
            x(!0);
            try {
                (await _({
                    clip: a,
                    rating: p,
                    description: b,
                    onProgress: (e) => {
                        v(e.loaded / e.total);
                    },
                }),
                    (0, r.P0)({ text: "Thanks for your feedback!", variant: "success" }),
                    d());
            } catch (e) {
                (g.nx.error("Failed to submit clip feedback", e),
                    (0, r.P0)({ text: "Failed to submit clip feedback. Please try again.", variant: "critical" }));
            } finally {
                x(!1);
            }
        }
    }
    return (0, t.jsx)(n.a, {
        transitionState: l,
        onClose: d,
        title: "Clip Feedback",
        subtitle:
            "Rate this clip to help us improve clip quality. The clip is attached automatically. We will use this clip for model training, so please don't complete this form if you don't want your clip to be used in this way.",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: d, disabled: w },
            { text: "Submit", variant: "primary", onClick: C, disabled: null == p, loading: w },
        ],
        children: (0, t.jsxs)(u.B, {
            gap: 16,
            children: [
                (0, t.jsx)(c.l, {
                    label: "Rating",
                    placeholder: "How good was this clip?",
                    selectionMode: "single",
                    options: y,
                    value: p,
                    onSelectionChange: h,
                }),
                (0, t.jsx)(s.f, {
                    label: "Description (optional)",
                    placeholder: "Anything else you want to say about this clip?",
                    value: b,
                    onChange: f,
                    maxLength: 5e4,
                    autosize: !0,
                }),
                w &&
                    (0, t.jsx)(o.z, {
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
