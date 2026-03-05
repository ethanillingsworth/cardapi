

export default function VariantTag({ tagId, value = null }) {
    const lookup = {
        "mem": {
            "className": "bg-emerald-300/50 text-emerald-300",
            "title": "Memorabilia"
        },
        "rc": {
            "className": "bg-blue-300/25 text-blue-400",
            "title": "Rookie Card"
        },
        "auto": {
            "className": "bg-rose-300/25 text-rose-400",
            "title": "Autographed"
        },
        "pr": {
            "className": "bg-purple-300/25 text-purple-400",
            "title": `Limited Run: /${value || "Unknown Number"}`
        }


    }

    console.log(lookup[tagId])


    return (
        <div className={`tag ${lookup[tagId].className}`}>{lookup[tagId].title}</div>
    );
}