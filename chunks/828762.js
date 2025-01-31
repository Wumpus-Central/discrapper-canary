t.d(e, { Z: () => U }), t(411104), t(47120);
var n = t(192379),
    a = t(399606),
    l = t(780384),
    r = t(570140),
    i = t(881052),
    o = t(141795),
    s = t(476326),
    d = t(983544),
    c = t(9874),
    u = t(710845),
    g = t(430824),
    m = t(277985),
    h = t(240864),
    f = t(863663),
    C = t(981631),
    p = t(388032);
function q(A, e, t) {
    return (
        e in A
            ? Object.defineProperty(A, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (A[e] = t),
        A
    );
}
let v = new u.Z('ProductAttachmentManager');
class x {
    addAttachment(A, e) {
        let t = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= t) throw (l.uv.announce(p.intl.formatToPlainString(p.t['0QDZ4O'], { maxAttachmentsCount: t })), Error('Too many attachments'));
        A.target = d.e.GUILD_PRODUCT_ATTACHMENT;
        let n = new o.n(A, this.guildId);
        n.upload(),
            n.on('error', (t) => {
                var a;
                t === C.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let r = 'number' == typeof t && t > 0 ? -t : -1,
                    i = (0, f.kg)(r),
                    o = null === (a = A.file) || void 0 === a ? void 0 : a.name;
                null != o
                    ? l.uv.announce(
                          p.intl.formatToPlainString(p.t['+YVkfX'], {
                              filename: o,
                              reason: i
                          })
                      )
                    : l.uv.announce(p.intl.formatToPlainString(p.t.mBkf6e, { reason: i })),
                    e((A) => ({
                        ...A,
                        [n.id]: r
                    }));
            }),
            n.on('progress', (A, t) => {
                e((e) => ({
                    ...e,
                    [n.id]: A / t
                }));
            }),
            (this.uploads = [...this.uploads, n]);
    }
    deleteAttachment(A) {
        let e = this.uploads.findIndex((e) => e.id === A);
        return -1 !== e && ((this.uploads = [...this.uploads]), this.uploads.splice(e, 1)[0].cancel(), !0);
    }
    cancelUnusedUploads() {
        for (let A of this.uploads) A.cancel();
        this.uploads = [];
    }
    async saveProductWithAttachments(A) {
        let e,
            { priceTier: t, createNewRole: n, imageName: a, ...l } = A;
        if (this.uploads.some((A) => A.status === o.m.ERROR)) throw Error('Cannot create product with failed attachments');
        'unlinkRole' in l && (e = l.unlinkRole);
        let i = this.uploads.filter((A) => !this.existingAttachmentIds.has(A.id)),
            s = this.uploads
                .filter((A) => this.existingAttachmentIds.has(A.id))
                .map((A) => {
                    var e;
                    return {
                        filename: null === (e = A.item.file) || void 0 === e ? void 0 : e.name,
                        id: A.id
                    };
                }),
            d = await this.createCloudUploader().uploadFiles(
                i,
                {
                    ...l,
                    price_tier: t,
                    create_new_role: n,
                    image_name: a,
                    unlink_role: e,
                    attachments: s.length > 0 ? s : void 0
                },
                { addFilesTo: 'attachments' }
            );
        return (
            v.log('Created/updated product:', d),
            null != d &&
                (this.isEdit
                    ? await r.Z.dispatch({
                          type: 'GUILD_PRODUCT_UPDATE',
                          product: d
                      })
                    : await r.Z.dispatch({
                          type: 'GUILD_PRODUCT_CREATE',
                          product: d
                      })),
            d
        );
    }
    constructor({ guildId: A, editSkuId: e, onFileSizeError: t }) {
        var n;
        q(this, 'guildId', void 0),
            q(this, 'isEdit', void 0),
            q(this, 'target', new m.Z()),
            q(this, 'createCloudUploader', void 0),
            q(this, 'onFileSizeError', void 0),
            q(this, 'existingAttachmentIds', new Set()),
            q(this, 'uploads', []),
            q(this, 'generateInitialProgresses', () => {
                let A = {};
                for (let e of this.uploads) A[e.id] = 1;
                return A;
            }),
            (this.isEdit = null != e);
        let a = null == e ? C.ANM.GUILD_PRODUCTS(A) : C.ANM.GUILD_PRODUCT_LISTINGS(A, e),
            l = null == e ? 'POST' : 'PATCH';
        (this.createCloudUploader = () => (0, c.F)(a, l)), (this.guildId = A), (this.onFileSizeError = t);
        let r = null === (n = h.Z.getGuildProduct(null != e ? e : '')) || void 0 === n ? void 0 : n.attachments;
        null != r &&
            (this.uploads = r.map((e) => {
                var t;
                this.existingAttachmentIds.add(e.id);
                let n = new o.n(
                    {
                        id: e.id,
                        platform: s.ow.WEB,
                        file: {
                            name: e.filename,
                            lastModified: 0,
                            size: null !== (t = e.size) && void 0 !== t ? t : 0
                        }
                    },
                    A
                );
                return (n.status = o.m.COMPLETED), n;
            }));
    }
}
function U(A, e) {
    var t;
    let { editSkuId: l, onFileSizeError: r } = e,
        o = (0, a.e7)([g.Z], () => g.Z.getGuild(A)),
        [s, d] = n.useState({
            editSkuId: l,
            onFileSizeError: r
        }),
        c = n.useMemo(
            () =>
                new x({
                    guildId: A,
                    ...s
                }),
            [A, s]
        ),
        [u, m] = n.useState(c.generateInitialProgresses),
        [, h] = n.useState(null);
    n.useLayoutEffect(() => {
        m(c.generateInitialProgresses());
    }, [c]);
    let [f, p] = n.useState(),
        [q, v] = n.useState(),
        U = n.useCallback(
            (A) => {
                c.deleteAttachment(A) && h({});
            },
            [c]
        ),
        b = n.useCallback(
            (A) => {
                c.addAttachment(A, m), h({});
            },
            [c]
        ),
        V = n.useCallback(
            async (A) => {
                try {
                    p(A), v(void 0);
                    let e = await c.saveProductWithAttachments(A);
                    return (
                        null != e &&
                            d({
                                editSkuId: e.id,
                                onFileSizeError: r
                            }),
                        h({}),
                        e
                    );
                } catch (A) {
                    v(
                        A instanceof i.Hx
                            ? A
                            : new i.Hx({
                                  status: 400,
                                  body: { attachments: [A.message] }
                              })
                    );
                } finally {
                    p(void 0);
                }
            },
            [c, r]
        ),
        j = n.useCallback(() => {
            c.cancelUnusedUploads(), h({});
        }, [c]);
    n.useEffect(
        () => () => {
            c.cancelUnusedUploads();
        },
        [c]
    );
    let { uploads: N } = c,
        I = !N.every((A) => c.existingAttachmentIds.has(A.id)) || N.length !== c.existingAttachmentIds.size;
    return {
        addAttachment: b,
        cancelUnusedUploads: j,
        deleteAttachment: U,
        fileUploadProgresses: u,
        uploads: N,
        saveProductWithAttachments: V,
        isSaving: null != f,
        changesSaving: f,
        saveError: q,
        hasUnsavedAttachmentChanges: I,
        canAttachFiles: N.length < c.target.getMaxAttachmentsCount(),
        canAttachArchives: null !== (t = null == o ? void 0 : o.hasFeature(C.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== t && t
    };
}
