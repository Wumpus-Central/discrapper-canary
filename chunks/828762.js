A.d(t, {
    Z: function () {
        return b;
    }
}),
    A(411104),
    A(47120);
var n = A(192379),
    r = A(399606),
    a = A(780384),
    i = A(570140),
    l = A(881052),
    o = A(141795),
    s = A(476326),
    d = A(983544),
    c = A(9874),
    u = A(710845),
    g = A(430824),
    h = A(277985),
    p = A(240864),
    m = A(863663),
    f = A(981631),
    v = A(388032);
function C(e, t, A) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = A),
        e
    );
}
let q = new u.Z('ProductAttachmentManager');
class x {
    addAttachment(e, t) {
        let A = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= A) throw (a.uv.announce(v.intl.formatToPlainString(v.t['0QDZ4O'], { maxAttachmentsCount: A })), Error('Too many attachments'));
        e.target = d.e.GUILD_PRODUCT_ATTACHMENT;
        let n = new o.n(e, this.guildId);
        n.upload(),
            n.on('error', (A) => {
                var r;
                A === f.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let i = 'number' == typeof A && A > 0 ? -A : -1,
                    l = (0, m.kg)(i),
                    o = null === (r = e.file) || void 0 === r ? void 0 : r.name;
                null != o
                    ? a.uv.announce(
                          v.intl.formatToPlainString(v.t['+YVkfX'], {
                              filename: o,
                              reason: l
                          })
                      )
                    : a.uv.announce(v.intl.formatToPlainString(v.t.mBkf6e, { reason: l })),
                    t((e) => ({
                        ...e,
                        [n.id]: i
                    }));
            }),
            n.on('progress', (e, A) => {
                t((t) => ({
                    ...t,
                    [n.id]: e / A
                }));
            }),
            (this.uploads = [...this.uploads, n]);
    }
    deleteAttachment(e) {
        let t = this.uploads.findIndex((t) => t.id === e);
        return -1 !== t && ((this.uploads = [...this.uploads]), this.uploads.splice(t, 1)[0].cancel(), !0);
    }
    cancelUnusedUploads() {
        for (let e of this.uploads) e.cancel();
        this.uploads = [];
    }
    async saveProductWithAttachments(e) {
        let t,
            { priceTier: A, createNewRole: n, imageName: r, ...a } = e;
        if (this.uploads.some((e) => e.status === o.m.ERROR)) throw Error('Cannot create product with failed attachments');
        'unlinkRole' in a && (t = a.unlinkRole);
        let l = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
            s = this.uploads
                .filter((e) => this.existingAttachmentIds.has(e.id))
                .map((e) => {
                    var t;
                    return {
                        filename: null === (t = e.item.file) || void 0 === t ? void 0 : t.name,
                        id: e.id
                    };
                }),
            d = await this.createCloudUploader().uploadFiles(
                l,
                {
                    ...a,
                    price_tier: A,
                    create_new_role: n,
                    image_name: r,
                    unlink_role: t,
                    attachments: s.length > 0 ? s : void 0
                },
                { addFilesTo: 'attachments' }
            );
        return (
            q.log('Created/updated product:', d),
            null != d &&
                (this.isEdit
                    ? await i.Z.dispatch({
                          type: 'GUILD_PRODUCT_UPDATE',
                          product: d
                      })
                    : await i.Z.dispatch({
                          type: 'GUILD_PRODUCT_CREATE',
                          product: d
                      })),
            d
        );
    }
    constructor({ guildId: e, editSkuId: t, onFileSizeError: A }) {
        var n;
        C(this, 'guildId', void 0),
            C(this, 'isEdit', void 0),
            C(this, 'target', new h.Z()),
            C(this, 'createCloudUploader', void 0),
            C(this, 'onFileSizeError', void 0),
            C(this, 'existingAttachmentIds', new Set()),
            C(this, 'uploads', []),
            C(this, 'generateInitialProgresses', () => {
                let e = {};
                for (let t of this.uploads) e[t.id] = 1;
                return e;
            }),
            (this.isEdit = null != t);
        let r = null == t ? f.ANM.GUILD_PRODUCTS(e) : f.ANM.GUILD_PRODUCT_LISTINGS(e, t),
            a = null == t ? 'POST' : 'PATCH';
        (this.createCloudUploader = () => (0, c.F)(r, a)), (this.guildId = e), (this.onFileSizeError = A);
        let i = null === (n = p.Z.getGuildProduct(null != t ? t : '')) || void 0 === n ? void 0 : n.attachments;
        null != i &&
            (this.uploads = i.map((t) => {
                var A;
                this.existingAttachmentIds.add(t.id);
                let n = new o.n(
                    {
                        id: t.id,
                        platform: s.ow.WEB,
                        file: {
                            name: t.filename,
                            lastModified: 0,
                            size: null !== (A = t.size) && void 0 !== A ? A : 0
                        }
                    },
                    e
                );
                return (n.status = o.m.COMPLETED), n;
            }));
    }
}
function b(e, t) {
    var A;
    let { editSkuId: a, onFileSizeError: i } = t,
        o = (0, r.e7)([g.Z], () => g.Z.getGuild(e)),
        [s, d] = n.useState({
            editSkuId: a,
            onFileSizeError: i
        }),
        c = n.useMemo(
            () =>
                new x({
                    guildId: e,
                    ...s
                }),
            [e, s]
        ),
        [u, h] = n.useState(c.generateInitialProgresses),
        [, p] = n.useState(null);
    n.useLayoutEffect(() => {
        h(c.generateInitialProgresses());
    }, [c]);
    let [m, v] = n.useState(),
        [C, q] = n.useState(),
        b = n.useCallback(
            (e) => {
                c.deleteAttachment(e) && p({});
            },
            [c]
        ),
        U = n.useCallback(
            (e) => {
                c.addAttachment(e, h), p({});
            },
            [c]
        ),
        V = n.useCallback(
            async (e) => {
                try {
                    v(e), q(void 0);
                    let t = await c.saveProductWithAttachments(e);
                    return (
                        null != t &&
                            d({
                                editSkuId: t.id,
                                onFileSizeError: i
                            }),
                        p({}),
                        t
                    );
                } catch (e) {
                    q(
                        e instanceof l.Hx
                            ? e
                            : new l.Hx({
                                  status: 400,
                                  body: { attachments: [e.message] }
                              })
                    );
                } finally {
                    v(void 0);
                }
            },
            [c, i]
        ),
        j = n.useCallback(() => {
            c.cancelUnusedUploads(), p({});
        }, [c]);
    n.useEffect(
        () => () => {
            c.cancelUnusedUploads();
        },
        [c]
    );
    let { uploads: I } = c,
        N = !I.every((e) => c.existingAttachmentIds.has(e.id)) || I.length !== c.existingAttachmentIds.size;
    return {
        addAttachment: U,
        cancelUnusedUploads: j,
        deleteAttachment: b,
        fileUploadProgresses: u,
        uploads: I,
        saveProductWithAttachments: V,
        isSaving: null != m,
        changesSaving: m,
        saveError: C,
        hasUnsavedAttachmentChanges: N,
        canAttachFiles: I.length < c.target.getMaxAttachmentsCount(),
        canAttachArchives: null !== (A = null == o ? void 0 : o.hasFeature(f.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== A && A
    };
}
