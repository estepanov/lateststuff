export const prerender = true;

import {
    PUBLIC_SITE,
} from '$env/static/public'

interface LatestContent {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
    title: string
    date: Date
    sourceCreditUrl: string
    siteTitle: string
    priceUSD: number
}

export async function load(): Promise<LatestContent> {
    const post = await import(`../site/${PUBLIC_SITE}/index.svx`)
    const { title, date, sourceCreditUrl, priceUSD } = post.metadata
    const content = post.default

    return {
        siteTitle: `Latest${PUBLIC_SITE.toUpperCase()}`,
        content,
        title,
        date,
        priceUSD,
        sourceCreditUrl
    }
}