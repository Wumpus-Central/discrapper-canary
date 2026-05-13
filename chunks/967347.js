"use strict";
n.d(t, { w: () => m });
var i = n(17928),
    r = n(228366),
    s = n(736056),
    a = n(174459),
    o = n(723702),
    l = n(19575),
    u = n(652215);
let c = { hashes: {} };
function d(e) {
    let t = (e >>> 0).toString(16);
    return t.length >= 4 ? t : t.padStart(4, "0");
}
async function _() {
    let e = window.DiscordNative?.processUtils;
    if (e?.getSystemInfo == null) return [];
    let t = await e.getSystemInfo(),
        n = (await window.DiscordNative?.hardware?.getDisplayCount?.()) ?? null,
        i = t.electronGPUInfo?.gpuDevice ?? [],
        r = i.find((e) => e.active) ?? i[0] ?? null,
        s = t.electronGPUInfo?.auxAttributes,
        a = "string" == typeof s?.glRenderer ? s.glRenderer : null,
        o = null != r && "string" == typeof r.driverVersion && "" !== r.driverVersion ? r.driverVersion : null,
        l = i.map((e) => ({
            brand: a,
            memory: 0,
            vendor_id: d(e.vendorId),
            device_id: d(e.deviceId),
            sub_sys_id: null,
            revision: null,
            driver_version: "string" == typeof e.driverVersion && "" !== e.driverVersion ? e.driverVersion : "",
            is_hybrid_integrated: !1,
            pcie_current_link_speed: null,
            pcie_max_link_speed: null,
            pcie_current_link_width: null,
            pcie_max_link_width: null,
        })),
        u = {
            wave: 1,
            cpu_brand: t.cpus[0]?.model ?? null,
            cpu_vendor: null,
            cpu_memory: t.total_memory,
            cpu_memory_avail: null,
            gpu_brand: a,
            gpu_memory: null,
            gpu_count: i.length,
            gpu_device_vendor_id: null != r ? d(r.vendorId) : null,
            gpu_device_device_id: null != r ? d(r.deviceId) : null,
            gpu_device_sub_sys_id: null,
            gpu_device_revision: null,
            gpu_driver_version: o,
            has_intel_hybrid_igpu: !1,
            gpus: l.length > 0 ? l : null,
            batteries: null,
            display_monitors: n,
            display_primary_width: window.screen.width,
            display_primary_height: window.screen.height,
            display_desktop_width: null,
            display_desktop_height: null,
            display_refresh_rate: null,
            display_color_space: null,
            camera_count: 0,
            camera_default_name: null,
            camera_default_max_width: null,
            camera_default_max_height: null,
            camera_default_has_i420: null,
            camera_default_has_nv12: null,
            camera_default_has_yuy2: null,
            camera_default_has_mjpg: null,
            camera_default_all_sample_formats: null,
            camera_default_bus: null,
            camera_default_vendor_id: null,
            camera_default_product_id: null,
        };
    return [
        {
            name: "hardware_detected",
            hash: (function (e) {
                let t = JSON.stringify({
                        cpu_brand: e.cpu_brand,
                        cpu_memory: e.cpu_memory,
                        gpu_count: e.gpu_count,
                        gpu_device_vendor_id: e.gpu_device_vendor_id,
                        gpu_device_device_id: e.gpu_device_device_id,
                        gpu_driver_version: e.gpu_driver_version,
                        display_monitors: e.display_monitors,
                        display_primary_width: e.display_primary_width,
                        display_primary_height: e.display_primary_height,
                    }),
                    n = 5381;
                for (let e = 0; e < t.length; e++) n = (((n << 5) + n) ^ t.charCodeAt(e)) >>> 0;
                return n;
            })(u),
            data: u,
        },
    ];
}
async function f() {
    if (!o.isPlatformEmbedded) return [];
    if ((0, o.isLinux)()) return _();
    if (!(0, o.isWindows)()) return [];
    await l.Ay.ensureModule("discord_media");
    let e = l.Ay.requireModule("discord_media");
    return (await e.getSystemAnalyticsBlob()) ?? [];
}
async function h() {
    try {
        let e = (await f()).filter((e) => c.hashes[e.name] !== e.hash);
        for (let { name: t, hash: n, data: i } of e) {
            let e = { ...i, gpus: i.gpus?.map((e) => JSON.stringify(e)) };
            a.default.track(u.HAw.HARDWARE_DETECTED, e), ((c = { hashes: { ...c.hashes } }).hashes[t] = n);
        }
        e.length > 0 && E.emitChange();
    } catch (e) {}
}
class p extends i.Ay.PersistedStore {
    static displayName = "SystemAnalyticsStore";
    static persistKey = "SystemAnalyticsStore";
    initialize(e) {
        (c = null != e && "object" == typeof e.hashes ? e : { hashes: {} }), this.waitFor(s.A);
    }
    getState() {
        return c;
    }
    async info() {
        try {
            let e = (await f()).find((e) => "hardware_detected" === e.name);
            if (null == e) return null;
            return e.data;
        } catch (e) {}
    }
}
let E = new p(r.h, {
    START_SESSION: function () {
        return h(), !1;
    },
});
function m() {
    return E.info();
}
