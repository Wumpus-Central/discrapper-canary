n.d(t, { X: () => i });
let i = {
    isSpatial: !1,
    limiterEnabled: !0,
    binaural: { spatialBlend: 1, bilinearInterpolation: !1, hrtfVolume: 1, hrtfNormalization: !1, hrtfFile: "" },
    distanceAttenuation: { enabled: !1, minDistance: 1 },
    airAbsorption: { enabled: !1, coefficients: { low: 2e-4, mid: 0.0017, high: 0.0182 } },
    reflections: {
        enabled: !1,
        durationSeconds: 1,
        numRays: 4096,
        numBounces: 4,
        irradianceMinDistance: 1,
        binauralDecode: !0,
        mixLevel: 1,
        room: {
            minCorner: { x: -8, y: -1.2, z: -6 },
            maxCorner: { x: 12, y: 1.6, z: 10 },
            floor: { absorption: { low: 0.15, mid: 0.5, high: 0.6 }, scattering: 0.5 },
            ceiling: { absorption: { low: 0.5, mid: 0.75, high: 0.75 }, scattering: 0.1 },
            walls: { absorption: { low: 0.2, mid: 0.25, high: 0.25 }, scattering: 0.6 },
        },
    },
};
