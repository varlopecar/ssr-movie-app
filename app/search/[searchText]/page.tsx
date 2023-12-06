import SearchResults from "@/components/SearchResults";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = {
    params: { searchText: string };
};

export function generateMetadata({ params }: Props) {
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
            <Suspense fallback={<div>Loading...</div>}>
                <SearchResults searchText={searchText} />
            </Suspense>
        </div>
    );
}

export default SearchTextPage;