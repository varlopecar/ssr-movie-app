type Props = {
    params: { searchText: string };
};

const SearchTextPage = ({ params }: Props) => {
    return <div>Search text: {params.searchText}</div>;
}

export default SearchTextPage;