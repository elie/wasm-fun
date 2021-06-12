async function loadWasm(path) {
    const wasmInstance = await loader.instantiateStreaming(fetch(path));
    return wasmInstance.exports;
}
