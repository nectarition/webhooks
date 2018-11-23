<?php
/**
 *  This file is part of reflar/webhooks.
 *
 *  Copyright (c) ReFlar.
 *
 *  https://reflar.redevs.org
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 */

namespace Reflar\Webhooks\Actions\Discussion;


use Carbon\Carbon;
use Reflar\Webhooks\Action;
use Reflar\Webhooks\Response;

class Restored extends Action
{

    /**
     * @param \Flarum\Discussion\Event\Restored $event
     * @return Response
     */
    function listen($event)
    {
        return Response::build($event)
            ->setTitle(
                $this->translate('discussion.restored', $event->discussion->title)
            )
            ->setURL('discussion', [
                'id' => $event->discussion->id
            ])
            ->setDescription($event->discussion->firstPost->content)
            ->setAuthor($event->actor)
            ->setColor('fed330')
            ->setTimestamp(Carbon::now());
    }

    /**
     * @return string
     */
    function getEvent()
    {
        return \Flarum\Discussion\Event\Restored::class;
    }
}