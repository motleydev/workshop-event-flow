import axios from "axios";

export default defineComponent({
  async run({ steps, $ }) {
    const { data } = await axios({
      method: "POST",
      headers: {
        Authorization: "Bearer <token>",
      },
      url: "<url>",
      data: JSON.stringify({
        query: `query GetUserData($id: uuid!) {
            event_signup_by_pk(id: $id) {
                event {
                    slug
                }
            user {
                name
                email
            }}}`,
        variables: {
          id: steps.trigger.event.body.event.data.new.id,
        },
      }),
    });
    return data;
  },
});
