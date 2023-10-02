import { useEffect } from "react";

/*======================================*/
/*======================================*/
/*======================================*/

//make the Title Pages daynamic
export const GetTitle = (title) => {
    useEffect(() => {
        document.title = `My Blog ${title}`
    }, [title]);

    return null;
}