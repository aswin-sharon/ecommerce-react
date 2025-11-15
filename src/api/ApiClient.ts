export const API_BASE_URL = import.meta.env.API_BASE_URL;

interface ApiOptions extends RequestInit {
    auth?: boolean; // 👈 new optional flag
}

export const ApiClient = async (endpoint: string, options: ApiOptions = {}) => {
    const token = localStorage.getItem("token");

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...(options.headers || {}),
    };

    // Add token only if requested and available
    if (options.auth && token) {
        type HeadersInit = Headers | string[][] | Record<string, string>;
    }

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!res.ok) throw new Error(await res.text());
    return res.json();
};
