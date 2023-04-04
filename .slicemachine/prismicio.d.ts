// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for continent documents */
interface ContinentDocumentData {
    /**
     * summary field in *continent*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.summary
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    summary: prismicT.KeyTextField;
    /**
     * title field in *continent*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * description field in *continent*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * slide field in *continent*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.slide
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    slide: prismicT.ImageField<never>;
    /**
     * banner field in *continent*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * countries field in *continent*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.countries
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    countries: prismicT.NumberField;
    /**
     * languages field in *continent*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.languages
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    languages: prismicT.NumberField;
    /**
     * cities field in *continent*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.cities
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    cities: prismicT.NumberField;
    /**
     * cities_list field in *continent*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.cities_list[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    cities_list: prismicT.GroupField<Simplify<ContinentDocumentDataCitiesListItem>>;
}
/**
 * Item in continent → cities_list
 *
 */
export interface ContinentDocumentDataCitiesListItem {
    /**
     * title field in *continent → cities_list*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.cities_list[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * country field in *continent → cities_list*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.cities_list[].country
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    country: prismicT.KeyTextField;
    /**
     * thumb field in *continent → cities_list*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.cities_list[].thumb
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumb: prismicT.ImageField<never>;
    /**
     * flag field in *continent → cities_list*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: continent.cities_list[].flag
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    flag: prismicT.ImageField<never>;
}
/**
 * continent document from Prismic
 *
 * - **API ID**: `continent`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContinentDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ContinentDocumentData>, "continent", Lang>;
export type AllDocumentTypes = ContinentDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ContinentDocumentData, ContinentDocumentDataCitiesListItem, ContinentDocument, AllDocumentTypes };
    }
}