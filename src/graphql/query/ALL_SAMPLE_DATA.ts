import gql from 'graphql-tag'

export default gql`
    query allSampleData {
        pluralSampleData {
            title
            shortDescription
        }
    }
`