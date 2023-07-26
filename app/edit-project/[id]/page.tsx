import { ProjectInterface } from "@/common.types"
import Modal from "@/components/Modal"
import ProjectForm from "@/components/ProjectForm"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"
import { getProjectDetails } from "@/lib/actions"

const EditProjectPage = async ({ params: { id } }: { params: { id: string } }) => {
    const session = await getCurrentUser()

    if (!session?.user) redirect('/')

    const result = await getProjectDetails(id) as { project?: ProjectInterface }

    return (
        <Modal>
            <h3 className="modal-head-text ">Edit Project</h3>
            <ProjectForm
                type='edit'
                session={session}
                project={result?.project}
            />
        </Modal>
    )
}

export default EditProjectPage
