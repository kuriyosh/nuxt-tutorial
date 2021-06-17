import gql from 'graphql-tag';

export default gql`
    mutation addSampleData($title: String, $shortDescription: String) {
        createSampleData(data: {title: $title, shortDescription: $shortDescription},) {
            title
            shortDescription
        }
    }
`