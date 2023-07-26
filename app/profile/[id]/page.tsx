import { UserProfile } from "@/common.types"
import UserProfilePage from "@/components/UserProfilePage"
import { getUserProjects } from "@/lib/actions"

type Props = {
    params: {
        id: string
    }
}

const Profile = async ({ params }: Props) => {
    const result = await getUserProjects(params.id, 50) as { user: UserProfile }

    if (!result?.user) {
        return <p className="no-result-text">Failed to fetch user info</p>
    }

    return <UserProfilePage user={result?.user} />
}

export default Profile
