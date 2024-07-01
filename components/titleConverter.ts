export default function shortenTitle(title:any){
    if(title.length > 50){
        return title.slice(0, 47) + '...';
    }
    return title;
}