import { ProjectInterface } from "@/common.types"
import { deleteProject, fetchAllProjects } from "@/lib/actions"
import ProjectCard from "@/components/ProjectCard"

type SearchParams = {
    category?: string | null,
    endcursor?: string | null,
}
type Props = {
    searchParams: SearchParams
}

type ProjectSearch = {
    projectSearch: {
        edges: { node: ProjectInterface }[],
        pageInfo: {
            hasPreviousPage: boolean,
            hasNextPage: boolean,
            startCursor: string,
            endCursor: string,
        },
    },
}

const Home = async ({ searchParams: { category, endcursor } }: Props) => {
    const data = await fetchAllProjects(category || '', endcursor) as ProjectSearch

    const projectsToDisplay = data?.projectSearch?.edges || [];
    console.log('getProjects', data)
    if (projectsToDisplay.length === 0) {
        return (
            <section className="flexStart flex-col paddings">
                Categories
                <p className="no-result-text text-center">No projects found, go create some first.</p>
            </section>
        )
    }

    return (
        <section className="flex-start flex-col paddings mb-16">
            <h1>Categories</h1>

            <section className="projects-grid">
                {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
                    <ProjectCard
                        key={node?.id}
                        id={node?.id}
                        image={node?.image}
                        title={node?.title}
                        name={node?.createdBy?.name}
                        avatarUrl={node?.createdBy?.avatarUrl}
                        userId={node?.createdBy?.id}
                    />
                ))}
            </section>

            <h1>LoadMore</h1>
        </section>
    )
}

export default Home
