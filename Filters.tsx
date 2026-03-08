interface Props {

    search: string
    setSearch: (value: string) => void
    sort: string
    setSort: (value: string) => void

}

export default function Filters({

    search,
    setSearch,
    sort,
    setSort

}: Props) {

    return (

        <div className="filters">

            <input
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <select
                value={sort}
                onChange={e => setSort(e.target.value)}
            >

                <option value="">
                    No sort
                </option>

                <option value="price">
                    Sort by price
                </option>

            </select>

        </div>

    )

}