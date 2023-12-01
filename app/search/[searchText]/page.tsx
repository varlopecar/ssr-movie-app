import SearchResults from "@/components/SearchResults";
import { Metadata } from "next";

type Props = {
    params: { searchText: string };
};

export function generateMetadata ({ params }: Props) {
    const { searchText } = params;

    return {
        title: `Search results for ${searchText} - My movies`,
        description: `Search results for ${searchText}`,
    };
}

const SearchTextPage = async ({ params }: Props) => {
    const { searchText } = params;

    return (
        <div>
            <h1>SearchTextPage</h1>
            <p>Search text: {searchText}</p>
            <SearchResults searchText={searchText} />
        </div>
    );
}

export default SearchTextPage;