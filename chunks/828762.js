n.d(t, { Z: () => P }), n(415506), n(388685);
var r = n(73800),
    A = n(399606),
    a = n(544891),
    l = n(780384),
    o = n(570140),
    i = n(881052),
    s = n(141795),
    c = n(476326),
    d = n(983544),
    u = n(9874),
    g = n(710845),
    f = n(430824),
    p = n(861990),
    m = n(277985),
    h = n(240864),
    b = n(863663),
    v = n(981631),
    C = n(388032);
function q(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                q(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = new g.Z('ProductAttachmentManager');
class U {
    addAttachment(e, t) {
        let n = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= n) throw (l.uv.announce(C.intl.formatToPlainString(C.t['0QDZ4O'], { maxAttachmentsCount: n })), Error('Too many attachments'));
        e.target = d.e.GUILD_PRODUCT_ATTACHMENT;
        let r = new s.n(e, this.guildId);
        r.upload(),
            r.on('error', (n) => {
                var A;
                n === v.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let a = 'number' == typeof n && n > 0 ? -n : -1,
                    o = (0, b.kg)(a),
                    i = null == (A = e.file) ? void 0 : A.name;
                null != i
                    ? l.uv.announce(
                          C.intl.formatToPlainString(C.t['+YVkfX'], {
                              filename: i,
                              reason: o
                          })
                      )
                    : l.uv.announce(C.intl.formatToPlainString(C.t.mBkf6e, { reason: o })),
                    t((e) => j(x({}, e), { [r.id]: a }));
            }),
            r.on('progress', (e, n) => {
                t((t) => j(x({}, t), { [r.id]: e / n }));
            }),
            (this.uploads = [...this.uploads, r]);
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
        let t;
        var { priceTier: n, createNewRole: r, imageName: A } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    A = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            A = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (A[n] = e[n]);
                        return A;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (A[n] = e[n]);
                }
                return A;
            })(e, ['priceTier', 'createNewRole', 'imageName']);
        if (this.uploads.some((e) => e.status === s.m.ERROR)) throw Error('Cannot create product with failed attachments');
        'unlinkRole' in l && (t = l.unlinkRole);
        let i = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
            c = this.uploads
                .filter((e) => this.existingAttachmentIds.has(e.id))
                .map((e) => {
                    var t;
                    return {
                        filename: null == (t = e.item.file) ? void 0 : t.name,
                        id: e.id
                    };
                }),
            d = (0, u.F)(),
            g = (await d.uploadFiles(i)).map((e, t) => (0, p.B)(e, t)),
            f = null != this.editSkuId ? a.tn.patch : a.tn.post,
            m = null != this.editSkuId ? v.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : v.ANM.GUILD_PRODUCTS(this.guildId),
            h = (
                await f({
                    url: m,
                    rejectWithError: !1,
                    body: j(x({}, l), {
                        price_tier: n,
                        create_new_role: r,
                        image_name: A,
                        unlink_role: t,
                        attachments: c.length > 0 ? [...c, ...g] : g
                    })
                })
            ).body;
        return (
            O.log('Created/updated product:', h),
            null != h &&
                (null != this.editSkuId
                    ? await o.Z.dispatch({
                          type: 'GUILD_PRODUCT_UPDATE',
                          product: h
                      })
                    : await o.Z.dispatch({
                          type: 'GUILD_PRODUCT_CREATE',
                          product: h
                      })),
            h
        );
    }
    constructor({ guildId: e, editSkuId: t, onFileSizeError: n }) {
        var r;
        q(this, 'guildId', void 0),
            q(this, 'editSkuId', void 0),
            q(this, 'target', new m.Z()),
            q(this, 'onFileSizeError', void 0),
            q(this, 'existingAttachmentIds', new Set()),
            q(this, 'uploads', []),
            q(this, 'generateInitialProgresses', () => {
                let e = {};
                for (let t of this.uploads) e[t.id] = 1;
                return e;
            }),
            (this.editSkuId = t),
            (this.guildId = e),
            (this.onFileSizeError = n);
        let A = null == (r = h.Z.getGuildProduct(null != t ? t : '')) ? void 0 : r.attachments;
        null != A &&
            (this.uploads = A.map((t) => {
                var n;
                this.existingAttachmentIds.add(t.id);
                let r = new s.n(
                    {
                        id: t.id,
                        platform: c.ow.WEB,
                        file: {
                            name: t.filename,
                            lastModified: 0,
                            size: null != (n = t.size) ? n : 0
                        }
                    },
                    e
                );
                return (r.status = s.m.COMPLETED), r;
            }));
    }
}
function P(e, t) {
    var n;
    let { editSkuId: a, onFileSizeError: l } = t,
        o = (0, A.e7)([f.Z], () => f.Z.getGuild(e)),
        [s, c] = r.useState({
            editSkuId: a,
            onFileSizeError: l
        }),
        d = r.useMemo(() => new U(x({ guildId: e }, s)), [e, s]),
        [u, g] = r.useState(d.generateInitialProgresses),
        [, p] = r.useState(null);
    r.useLayoutEffect(() => {
        g(d.generateInitialProgresses());
    }, [d]);
    let [m, h] = r.useState(),
        [b, C] = r.useState(),
        q = r.useCallback(
            (e) => {
                d.deleteAttachment(e) && p({});
            },
            [d]
        ),
        j = r.useCallback(
            (e) => {
                d.addAttachment(e, g), p({});
            },
            [d]
        ),
        O = r.useCallback(
            async (e) => {
                try {
                    h(e), C(void 0);
                    let t = await d.saveProductWithAttachments(e);
                    return (
                        null != t &&
                            c({
                                editSkuId: t.id,
                                onFileSizeError: l
                            }),
                        p({}),
                        t
                    );
                } catch (e) {
                    C(
                        e instanceof i.Hx
                            ? e
                            : new i.Hx({
                                  status: 400,
                                  body: { attachments: [e.message] }
                              })
                    );
                } finally {
                    h(void 0);
                }
            },
            [d, l]
        ),
        P = r.useCallback(() => {
            d.cancelUnusedUploads(), p({});
        }, [d]);
    r.useEffect(
        () => () => {
            d.cancelUnusedUploads();
        },
        [d]
    );
    let { uploads: V } = d,
        y = !V.every((e) => d.existingAttachmentIds.has(e.id)) || V.length !== d.existingAttachmentIds.size;
    return {
        addAttachment: j,
        cancelUnusedUploads: P,
        deleteAttachment: q,
        fileUploadProgresses: u,
        uploads: V,
        saveProductWithAttachments: O,
        isSaving: null != m,
        changesSaving: m,
        saveError: b,
        hasUnsavedAttachmentChanges: y,
        canAttachFiles: V.length < d.target.getMaxAttachmentsCount(),
        canAttachArchives: null != (n = null == o ? void 0 : o.hasFeature(v.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && n
    };
}
