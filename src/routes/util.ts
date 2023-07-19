export function get_twemoji(emoji:string){
    return `/twemoji/${[...emoji].map((emo)=>emo.codePointAt(0)?.toString(16)).join('-')}.svg`;
}