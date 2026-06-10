l.d(a, { default: () => k });
var i = l(627968),
    t = l(64700),
    n = l(189213),
    o = l(260598),
    s = l(911608),
    u = l(691540),
    r = l(857250),
    c = l(97483),
    d = l(331322),
    p = l(691885);
l(321073);
var h = l(562708),
    m = l(636537),
    b = l(77729),
    v = l(77138),
    _ = l(53677),
    f = l(652215);
async function g(e) {
    let { clip: a, rating: l, description: i, onProgress: t } = e,
        n = await b.A.clips.loadClip(a.filepath),
        o = new File([n.data], n.filename, { type: "video/mp4" }),
        s = [
            { name: "clip_uuid", value: a.id },
            { name: "rating", value: l },
            { name: "clip_type", value: (0, _.NM)(a) },
        ];
    null != i && "" !== i && s.push({ name: "description", value: i });
    let u = (0, h.getSuperProperties)();
    u?.os != null && s.push({ name: "os", value: u.os }),
        u?.os_version != null && s.push({ name: "os_version", value: u.os_version }),
        u?.client_version != null && s.push({ name: "client_version", value: u.client_version }),
        u?.client_build_number != null && s.push({ name: "client_build_number", value: `${u.client_build_number}` }),
        u?.release_channel != null && s.push({ name: "release_channel", value: u.release_channel });
    try {
        await (0, v.a)(f.Umv.WEB_APP);
    } catch (e) {}
    return m.Bo.post({
        url: f.Rsh.CLIP_FEEDBACK,
        attachments: [{ name: "file", file: o, filename: o.name }],
        fields: s,
        rejectWithError: !0,
        onRequestProgress: t,
    });
}
var y = l(696016);
let C = [
    { id: "good", label: "Good", value: "good" },
    { id: "neutral", label: "Neutral", value: "neutral" },
    { id: "bad", label: "Bad", value: "bad" },
];
function k(e) {
    let { clip: a, transitionState: l, onClose: h } = e,
        [m, b] = t.useState(null),
        [v, _] = t.useState(0),
        [f, k] = t.useState(""),
        [w, S] = t.useState(!1);
    async function x() {
        if (null != m) {
            S(!0);
            try {
                await g({
                    clip: a,
                    rating: m,
                    description: f,
                    onProgress: (e) => {
                        _(e.loaded / e.total);
                    },
                }),
                    (0, u.P0)((0, r.o)("Thanks for your feedback!", c.Ck.SUCCESS)),
                    h();
            } catch (e) {
                y.nx.error("Failed to submit clip feedback", e),
                    (0, u.P0)((0, r.o)("Failed to submit clip feedback. Please try again.", c.Ck.FAILURE));
            } finally {
                S(!1);
            }
        }
    }
    return (0, i.jsx)(n.Modal, {
        transitionState: l,
        onClose: h,
        title: "Clip Feedback",
        subtitle:
            "Rate this clip to help us improve clip quality. The clip is attached automatically. We will use this clip for model training, so please don't complete this form if you don't want your clip to be used in this way.",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: h, disabled: w },
            { text: "Submit", variant: "primary", onClick: x, disabled: null == m, loading: w },
        ],
        children: (0, i.jsxs)(d.B, {
            gap: 16,
            children: [
                (0, i.jsx)(p.l, {
                    label: "Rating",
                    placeholder: "How good was this clip?",
                    selectionMode: "single",
                    options: C,
                    value: m,
                    onSelectionChange: b,
                }),
                (0, i.jsx)(o.f, {
                    label: "Description (optional)",
                    placeholder: "Anything else you want to say about this clip?",
                    value: f,
                    onChange: k,
                    maxLength: 5e4,
                    autosize: !0,
                }),
                w &&
                    (0, i.jsx)(s.z, {
                        value: v,
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
