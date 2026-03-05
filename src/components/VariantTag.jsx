

export default function VariantTag({ tagId }) {
    const lookup = {
        "mem": {
            "className": "bg-emerald-600 text-emerald-300 border-emerald-300",
            "title": "Memorabilia"
        },
        "rc": {
            "className": "bg-indigo-600 text-indigo-300 border-indigo-300",
            "title": "Rookie Card"
        },
        "auto": {
            "className": "bg-rose-600 text-rose-300 border-rose-300",
            "title": "Autographed"
        },

    }

    if (tagId == "pr") {
        return null
    }


    return (
        <div className={`tag ${lookup[tagId].className}`}>{lookup[tagId].title}</div>
    );
}