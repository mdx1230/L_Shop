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
                    Нет сортировки
                </option>

                <option value="price">
                    Сортировать по цене
                </option>

            </select>

        </div>

    )


}
